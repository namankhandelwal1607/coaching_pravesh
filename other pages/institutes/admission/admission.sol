//SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;
contract admission{
    studentInfo[] public student;
    struct studentInfo{
        string name;
        uint256 age;
        uint256 contact;
        string email;
    }

    function takeInfo(string memory _name, uint256 _age, uint256 _contact, string memory _email) public{
        student.push(studentInfo(_name, _age,_contact,_email));
    }

    function getInfo(uint256 index) public view returns (studentInfo memory){//memory keyword is essential for structure
        return student[index];
    }
}