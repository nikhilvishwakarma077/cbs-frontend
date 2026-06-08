package com.bank.cbs.dto;

import lombok.Data;

@Data
public class DepositRequestDTO {

    private Long accountId;
    private Double amount;
}