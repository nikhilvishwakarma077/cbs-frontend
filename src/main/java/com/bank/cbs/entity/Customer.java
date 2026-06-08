package com.bank.cbs.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Customer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long customerId;

    private String firstName;
    private String lastName;

    @Column(unique = true)
    private String mobile;

    @Column(unique = true)
    private String email;

    private String dateOfBirth;
    private String gender;

    private String address;
    private String city;
    private String state;
    private String pincode;

    private String panNumber;
    private String aadhaarNumber;

    private String status; // PENDING / VERIFIED
}