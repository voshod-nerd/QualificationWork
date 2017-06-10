/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.infiniteskills.mvc.entity;

import java.io.Serializable;
import java.math.BigDecimal;
import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Table;
import javax.xml.bind.annotation.XmlRootElement;

/**
 *
 * @author Талалаев
 */
@Entity
@Table(name = "order")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "Order1.findAll", query = "SELECT o FROM Order1 o"),
    @NamedQuery(name = "Order1.findById", query = "SELECT o FROM Order1 o WHERE o.id = :id"),
    @NamedQuery(name = "Order1.findByWidth", query = "SELECT o FROM Order1 o WHERE o.width = :width"),
    @NamedQuery(name = "Order1.findByPrice", query = "SELECT o FROM Order1 o WHERE o.price = :price"),
    @NamedQuery(name = "Order1.findByHeigth", query = "SELECT o FROM Order1 o WHERE o.heigth = :heigth")})
public class Order1 implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(name = "id")
    private Integer id;
    @Column(name = "width")
    private Integer width;
    // @Max(value=?)  @Min(value=?)//if you know range of your decimal fields consider using these annotations to enforce field validation
    @Column(name = "price")
    private BigDecimal price;
    @Column(name = " heigth")
    private Integer heigth;
    @JoinColumn(name = "typeorder", referencedColumnName = "id")
    @ManyToOne
    private Typeoforders typeorder;
    @JoinColumn(name = " reflux", referencedColumnName = "id")
    @ManyToOne
    private Reflux reflux;
    @JoinColumn(name = "typeprofil", referencedColumnName = "id")
    @ManyToOne
    private TypeProfil typeprofil;
    @JoinColumn(name = "glasspacket", referencedColumnName = "id")
    @ManyToOne
    private Glasspacket glasspacket;
    @JoinColumn(name = " install", referencedColumnName = "id")
    @ManyToOne
    private Install install;
    @JoinColumn(name = "sill", referencedColumnName = "id")
    @ManyToOne
    private Sill sill;

    public Order1() {
    }

    public Order1(Integer id) {
        this.id = id;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getWidth() {
        return width;
    }

    public void setWidth(Integer width) {
        this.width = width;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }

    public Integer getHeigth() {
        return heigth;
    }

    public void setHeigth(Integer heigth) {
        this.heigth = heigth;
    }

    public Typeoforders getTypeorder() {
        return typeorder;
    }

    public void setTypeorder(Typeoforders typeorder) {
        this.typeorder = typeorder;
    }

    public Reflux getReflux() {
        return reflux;
    }

    public void setReflux(Reflux reflux) {
        this.reflux = reflux;
    }

    public TypeProfil getTypeprofil() {
        return typeprofil;
    }

    public void setTypeprofil(TypeProfil typeprofil) {
        this.typeprofil = typeprofil;
    }

    public Glasspacket getGlasspacket() {
        return glasspacket;
    }

    public void setGlasspacket(Glasspacket glasspacket) {
        this.glasspacket = glasspacket;
    }

    public Install getInstall() {
        return install;
    }

    public void setInstall(Install install) {
        this.install = install;
    }

    public Sill getSill() {
        return sill;
    }

    public void setSill(Sill sill) {
        this.sill = sill;
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
        if (!(object instanceof Order1)) {
            return false;
        }
        Order1 other = (Order1) object;
        if ((this.id == null && other.id != null) || (this.id != null && !this.id.equals(other.id))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "com.infiniteskills.mvc.entity.Order1[ id=" + id + " ]";
    }
    
}
