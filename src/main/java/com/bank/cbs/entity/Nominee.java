package com.bank.cbs.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Nominee {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long nomineeId;

    private String firstName;
    private String lastName;

    private String relation;

    private String mobile;

    private Integer age;

    private Double sharePercentage;

    @ManyToOne
    @JoinColumn(name = "account_id")
    private Account account;
}