//SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract Area {
    struct AreaManager {
        address managerAddress;
        string areaName;
    }
    mapping(address => AreaManager) public areaManagers;

    function addAreaManager(string memory _areaName) external {
        areaManagers[msg.sender] = AreaManager(msg.sender, _areaName);
    }

    function getAreaManager(
        address _managerAddress
    ) public view returns (AreaManager memory) {
        return areaManagers[_managerAddress];
    }
}
