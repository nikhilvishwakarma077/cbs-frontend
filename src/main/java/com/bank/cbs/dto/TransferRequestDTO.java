package com.bank.cbs.dto;

import lombok.Data;

@Data
public class TransferRequestDTO {

    private Long accountId;
    private Long toAccountId;
    private Double amount;
}