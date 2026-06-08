package com.bank.cbs.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Account {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long accountId;

    private String accountType; // SAVINGS / CURRENT
    private Double balance;
    private String status; // ACTIVE / INACTIVE

    private String accountNumber; // important

    @ManyToOne
    @JoinColumn(name = "customer_id")
    private Customer customer;
}