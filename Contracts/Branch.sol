// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Branch {
    struct BranchManager {
        address managerAddress;
        string areaName;
        string branchName;
    }
    mapping(address => BranchManager) public branchManagers;

    function addBranchManager(
        string memory _areaName,
        string memory _branchName
    ) external {
        branchManagers[msg.sender] = BranchManager(
            msg.sender,
            _areaName,
            _branchName
        );
    }

    function getBranchManager(
        address _managerAddress
    ) public view returns (BranchManager memory) {
        return branchManagers[_managerAddress];
    }
}
