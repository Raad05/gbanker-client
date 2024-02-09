// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "./Area.sol";
import "./Branch.sol";
import "./Mfi.sol";

contract LoanApprovalSystem {
    struct Loan {
        uint256 loanAmount;
        uint256 packageId;
        uint256 memberId;
        bool approved;
        string areaName;
    }

    mapping(uint256 => Loan) public loans;
    Branch public branchContract;
    Area public areaContract;
    MFISystem public mfiContract;

    event loanAdded(
        uint256 loanAmount,
        uint256 packageId,
        uint256 memberId,
        string areaName
    );
    event loanApproved(uint256 loanAmount, uint256 packageId, uint256 memberId);
    event loanDisapproved(
        uint256 loanAmount,
        uint256 packageId,
        uint256 memberId
    );

    constructor(
        address _branchContractAddress,
        address _areaContractAddress,
        address _mfiContract
    ) {
        branchContract = Branch(_branchContractAddress);
        areaContract = Area(_areaContractAddress);
        mfiContract = MFISystem(_mfiContract);
    }

    modifier branchManagerModifier() {
        Branch.BranchManager memory branchManager = branchContract
            .getBranchManager(msg.sender);
        require(
            branchManager.managerAddress != address(0),
            "Only branch managers can access this function"
        );
        _;
    }
    modifier AreaManagerModifier() {
        Area.AreaManager memory areaManager = areaContract.getAreaManager(
            msg.sender
        );
        require(
            areaManager.managerAddress != address(0),
            "Only Area managers can access this function"
        );
        _;
    }

    function approveLoan(uint256 _loanId) external AreaManagerModifier {
        Area.AreaManager memory areaManager = areaContract.getAreaManager(
            msg.sender
        );
        require(
            keccak256(bytes(areaManager.areaName)) ==
                keccak256(bytes(loans[_loanId].areaName)),
            "Member and area manager should be in the same area"
        );
        require(loans[_loanId].loanAmount > 0, "Loan does not exist");
        require(!loans[_loanId].approved, "Loan already approved");

        emit loanApproved(
            loans[_loanId].loanAmount,
            loans[_loanId].packageId,
            loans[_loanId].memberId
        );

        loans[_loanId].approved = true;
    }

    function disapproveLoan(uint256 _loanId) external AreaManagerModifier {
        Area.AreaManager memory areaManager = areaContract.getAreaManager(
            msg.sender
        );
        require(
            keccak256(bytes(areaManager.areaName)) ==
                keccak256(bytes(loans[_loanId].areaName)),
            "Member and area manager should be in the same area"
        );
        require(loans[_loanId].loanAmount > 0, "Loan does not exist");
        require(!loans[_loanId].approved, "Loan already approved");

        emit loanDisapproved(
            loans[_loanId].loanAmount,
            loans[_loanId].packageId,
            loans[_loanId].memberId
        );

        loans[_loanId].approved = false;
    }

    function addLoan(
        uint256 _loanId,
        uint256 _loanAmount,
        uint256 _packageId,
        uint256 _memberId
    ) external branchManagerModifier {
        require(_loanAmount > 0, "Loan amount must be greater than zero");
        MFISystem.Member memory member = mfiContract.getMember(_memberId);
        require(member.approved == true, "Member not approved");
        Branch.BranchManager memory branchManager = branchContract
            .getBranchManager(msg.sender);
        require(
            keccak256(bytes(branchManager.branchName)) ==
                keccak256(bytes(member.branchName)),
            "Member and branch manager should be in the same branch"
        );
        require(loans[_loanId].loanAmount == 0, "Loan ID already exists");

        emit loanAdded(_loanAmount, _packageId, _memberId, member.areaName);

        loans[_loanId] = Loan(
            _loanAmount,
            _packageId,
            _memberId,
            false,
            member.areaName
        );
    }

    function isLoanApproved(uint256 _loanId) public view returns (bool) {
        return loans[_loanId].approved;
    }
}
