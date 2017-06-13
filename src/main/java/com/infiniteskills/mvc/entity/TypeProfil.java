/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.infiniteskills.mvc.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import java.io.Serializable;
import java.math.BigDecimal;
import java.util.Collection;
import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.Size;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlTransient;

/**
 *
 * @author Талалаев
 */
@Entity
@Table(name = "type_profil")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "TypeProfil.findAll", query = "SELECT t FROM TypeProfil t"),
    @NamedQuery(name = "TypeProfil.findById", query = "SELECT t FROM TypeProfil t WHERE t.id = :id"),
    @NamedQuery(name = "TypeProfil.findByName", query = "SELECT t FROM TypeProfil t WHERE t.name = :name"),
    @NamedQuery(name = "TypeProfil.findByPrice", query = "SELECT t FROM TypeProfil t WHERE t.price = :price")})
public class TypeProfil implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(name = "id")
    private Integer id;
    @Size(max = 50)
    @Column(name = "name")
    private String name;
    // @Max(value=?)  @Min(value=?)//if you know range of your decimal fields consider using these annotations to enforce field validation
    @Column(name = "price")
    private BigDecimal price;
     @JsonIgnore
    @OneToMany(mappedBy = "idtypeprofil")
    private Collection<Zakaz> zakazCollection;

    public TypeProfil() {
    }

    public TypeProfil(Integer id) {
        this.id = id;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }

    @XmlTransient
    public Collection<Zakaz> getZakazCollection() {
        return zakazCollection;
    }

    public void setZakazCollection(Collection<Zakaz> zakazCollection) {
        this.zakazCollection = zakazCollection;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (id != null ? id.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof TypeProfil)) {
            return false;
        }
        TypeProfil other = (TypeProfil) object;
        if ((this.id == null && other.id != null) || (this.id != null && !this.id.equals(other.id))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "com.infiniteskills.mvc.entity.TypeProfil[ id=" + id + " ]";
    }
    
}
