package com.bank.cbs.dto;

import lombok.Data;

@Data
public class CustomerRequestDTO {

    private String firstName;
    private String lastName;
    private String mobile;
    private String email;

    private String dateOfBirth;
    private String gender;

    private String address;
    private String city;
    private String state;
    private String pincode;

    private String panNumber;
    private String aadhaarNumber;
}