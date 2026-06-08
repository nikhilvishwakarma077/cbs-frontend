package com.bank.cbs.dto;

import lombok.Data;

@Data
public class AccountRequestDTO {

    private Long customerId;
    private String accountType;
}