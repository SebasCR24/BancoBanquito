package com.banquito.core.products.model;

import java.io.Serializable;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@NoArgsConstructor
@Getter
@Setter
@ToString
@Embeddable

public class ProductPK implements Serializable {

    @Column(name = "CODE_PRODUCT_TYPE", length = 20, nullable = false)
    private String codeProductType;
    @Column(name = "CODE_PRODUCT", length = 30, nullable = false)
    private String codeProduct;

    public ProductPK(String codeProductType, String codeProduct) {
        this.codeProductType = codeProductType;
        this.codeProduct = codeProduct;
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((codeProductType == null) ? 0 : codeProductType.hashCode());
        result = prime * result + ((codeProduct == null) ? 0 : codeProduct.hashCode());
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
        ProductPK other = (ProductPK) obj;
        if (codeProductType == null) {
            if (other.codeProductType != null)
                return false;
        } else if (!codeProductType.equals(other.codeProductType))
            return false;
        if (codeProduct == null) {
            if (other.codeProduct != null)
                return false;
        } else if (!codeProduct.equals(other.codeProduct))
            return false;
        return true;
    }

}
