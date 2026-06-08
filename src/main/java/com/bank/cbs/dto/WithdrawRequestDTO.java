package com.bank.cbs.dto;

import lombok.Data;

@Data
public class WithdrawRequestDTO {

    private Long accountId;
    private Double amount;
}