// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "./Area.sol";
import "./Branch.sol";

contract MFISystem {
    struct Member {
        string name;
        bool approved;
        uint256 memberId;
        string areaName;
        string branchName;
        string centerName;
    }

    mapping(uint256 => Member) public members;
    uint256 public memberId;
    Branch public branchContract;
    Area public areaContract;

    event memberAdded(
        uint256 memberId,
        string name,
        string areaName,
        string branchName,
        string centerName
    );
    event memberApproved(
        uint256 memberId,
        string name,
        string areaName,
        string branchName,
        string centerName
    );

    constructor(address _branchContractAddress, address _areaContractAddress) {
        branchContract = Branch(_branchContractAddress);
        areaContract = Area(_areaContractAddress);
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

    function addMember(
        string memory _name,
        uint256 _memberId,
        string memory _areaName,
        string memory _branchName,
        string memory _centerName
    ) external payable branchManagerModifier {
        // require(msg.sender == branchManager, "Only authorized personnel can add members");
        // require(members[_memberId].approved == false, "Member already exists");
        // require(bytes(_name).length > 0, "Name must not be empty");

        // members[_memberId] = Member(_name, false, _memberId,_branchName, _centerName);
        Branch.BranchManager memory branchManager = branchContract
            .getBranchManager(msg.sender);
        require(
            keccak256(bytes(branchManager.branchName)) ==
                keccak256(bytes(_branchName)),
            "Member and branch manager should be in the same branch"
        );
        require(members[_memberId].approved == false, "Member already exists");
        require(bytes(_name).length > 0, "Name must not be empty");
        emit memberAdded(_memberId, _name, _areaName, _branchName, _centerName);
        members[_memberId] = Member(
            _name,
            false,
            _memberId,
            _areaName,
            _branchName,
            _centerName
        );
    }

    function approveMember(
        uint256 _memberId
    ) external payable AreaManagerModifier {
        Area.AreaManager memory areaManager = areaContract.getAreaManager(
            msg.sender
        );
        require(
            keccak256(bytes(areaManager.areaName)) ==
                keccak256(bytes(members[_memberId].areaName)),
            "Member and area manager should be in the same area"
        );
        require(members[_memberId].approved == false, "Member does not exist");
        emit memberApproved(
            _memberId,
            members[_memberId].name,
            members[_memberId].areaName,
            members[_memberId].branchName,
            members[_memberId].centerName
        );
        members[_memberId].approved = true;
    }

    function isMemberApproved(uint256 _memberId) public view returns (bool) {
        return members[_memberId].approved;
    }

    function getAllMembers() public view returns (Member[] memory) {
        Member[] memory allMembers = new Member[](memberId);
        uint256 index = 0;

        for (uint256 i = 0; i < memberId; i++) {
            if (members[i].approved) {
                allMembers[index] = members[i];
                index++;
            }
        }

        return allMembers;
    }

    function getMember(uint256 _memberId) public view returns (Member memory) {
        return members[_memberId];
    }
}
