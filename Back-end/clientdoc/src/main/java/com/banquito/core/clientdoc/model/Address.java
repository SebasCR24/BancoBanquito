package com.banquito.core.clientdoc.model;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class Address {

    private String type;
    private String Line1;
    private String Line2;
    private Float latitude;
    private Float longitude;
    private Boolean isDefault;
    private String State;

}
