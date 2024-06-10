package com.banquito.core.products.model;

import java.io.Serializable;
import java.math.BigDecimal;
import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.EmbeddedId;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@NoArgsConstructor
@Getter
@Setter
@ToString
@Entity
@Table(name = "PRODUCT")

public class Product implements Serializable {
    @EmbeddedId
    private ProductPK pk;
    @Column(name = "CODE_INTEREST_RATE", length = 10, nullable = false)
    private String codeInterestRate;
    @Column(name = "CODE_SEGMENT", length = 10, nullable = false)
    private String codeSegment;
    @Column(name = "NAME", length = 100, nullable = false)
    private String name;
    @Column(name = "STATE", length = 3, nullable = false)
    private String state;
    @Temporal(TemporalType.DATE)
    @Column(name = "START_DATE", nullable = false)
    private Date starDate;
    @Temporal(TemporalType.DATE)
    @Column(name = "END_DATE", nullable = false)
    private Date endDate;
    @Column(name = "ALLOW_DEBIT_CARD", nullable = false)
    private Boolean allowDebitCard;
    @Column(name = "ALLOW_TRANSFERENCES", nullable = false)
    private Boolean allowTransferences;
    @Column(name = "MINIMUM_OPENING_BALANCE", precision = 17, scale = 2, nullable = false)
    private BigDecimal minOpeningBalance;

    @OneToMany
    @JoinColumn(name = "CODE_PRODUCT_TYPE", referencedColumnName = "CODE_PRODUCT_TYPE", insertable = false, updatable = false)
    private ProductType productType;
}
