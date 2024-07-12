package com.banquito.core.clientdoc.model;

import java.time.LocalDate;
import java.time.LocalDateTime;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.CompoundIndexes;

@Getter
@Setter
@NoArgsConstructor
@ToString
@Document(collection = "clients")
@CompoundIndexes({
    @CompoundIndex(name = "client_idx", def = "{'identificationType' : 1, 'identification' : 1}")
})
public class Client {

    @Id
    private String id;
    private String codeSegment;
    private String clientType;
    private String identificationType;
    private String identification;
    private String lastName;
    private String firstName;
    private String fullName;
    private String email;
    private LocalDate birthDate;
    private String companyName;
    private String companyType;
    private String state;
    private LocalDateTime createDate;
    private LocalDateTime lastStateDate;
    private String nationality;
    private String maritalState;
    private BigDecimal monthlyAvgIncome;
    private String notes;


}
