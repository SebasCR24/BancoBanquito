package com.banquito.core.products.model;

import java.io.Serializable;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@NoArgsConstructor
@Getter
@Setter
@ToString
@Entity
@Table(name = "PRODUCT_TYPE")

public class ProductType implements Serializable {

        @Id
        @Column(name = "CODE_PRODUCT_TYPE", length = 20, nullable = false)
        private String codeProductType;
        @Column(name = "NAME", length = 100, nullable = false)
        private String name;
        @Column(name = "ACCOUNT_TYPE", length = 3, nullable = false)
        private String accountType;
        @Column(name = "ALLOW_EARN_INTEREST", nullable = false)
        private Boolean allowEarnInterest;
        @Column(name = "TEMPORALITY_INTEREST", length = 3)
        private String temporalityInterest;

        public ProductType(String codeProductType) {
                this.codeProductType = codeProductType;
        }

        @Override
        public int hashCode() {
                final int prime = 31;
                int result = 1;
                result = prime * result + ((codeProductType == null) ? 0 : codeProductType.hashCode());
                return result;
        }

        @Override
        public boolean equals(Object obj) {
                if (this == obj)
                        return true;
                if (obj == null)
                        return false;
                if (getClass() != obj.getClass())
                        return false;
                ProductType other = (ProductType) obj;
                if (codeProductType == null) {
                        if (other.codeProductType != null)
                                return false;
                } else if (!codeProductType.equals(other.codeProductType))
                        return false;
                return true;
        }

}
