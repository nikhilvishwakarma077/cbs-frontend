package com.bank.cbs.dto;

import lombok.Data;

@Data
public class NomineeRequestDTO {

    private Long accountId;

    private String firstName;
    private String lastName;

    private String relation;
    private String mobile;

    private Integer age;

    private Double sharePercentage;
}