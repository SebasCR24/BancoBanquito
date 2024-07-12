package com.banquito.core.clientdoc.model;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor 
public class Phone {

    private String Type;
    private String Number;
    private Boolean isDefault;

}
