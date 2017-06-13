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
import javax.validation.constraints.Size;
import javax.xml.bind.annotation.XmlRootElement;

/**
 *
 * @author Талалаев
 */
@Entity
@Table(name = "zakaz")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "Zakaz.findAll", query = "SELECT z FROM Zakaz z"),
    @NamedQuery(name = "Zakaz.findById", query = "SELECT z FROM Zakaz z WHERE z.id = :id"),
    @NamedQuery(name = "Zakaz.findByPrice", query = "SELECT z FROM Zakaz z WHERE z.price = :price"),
    @NamedQuery(name = "Zakaz.findByFurnitura", query = "SELECT z FROM Zakaz z WHERE z.furnitura = :furnitura"),
    @NamedQuery(name = "Zakaz.findByParam", query = "SELECT z FROM Zakaz z WHERE z.param = :param")})
public class Zakaz implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(name = "id")
    private Integer id;
    // @Max(value=?)  @Min(value=?)//if you know range of your decimal fields consider using these annotations to enforce field validation
    @Column(name = "price")
    private BigDecimal price;
    @Size(max = 255)
    @Column(name = "furnitura")
    private String furnitura;
    @Size(max = 255)
    @Column(name = "param")
    private String param;
    @JoinColumn(name = "idtypeorder", referencedColumnName = "id")
    @ManyToOne
    private Typeoforders idtypeorder;
    @JoinColumn(name = "idreflux", referencedColumnName = "id")
    @ManyToOne
    private Reflux idreflux;
    @JoinColumn(name = "idtypeprofil", referencedColumnName = "id")
    @ManyToOne
    private TypeProfil idtypeprofil;
    @JoinColumn(name = "idclient", referencedColumnName = "id")
    @ManyToOne
    private Itemdelivery idclient;
    @JoinColumn(name = "idglasspacket", referencedColumnName = "id")
    @ManyToOne
    private Glasspacket idglasspacket;
    @JoinColumn(name = "idinstall", referencedColumnName = "id")
    @ManyToOne
    private Install idinstall;
    @JoinColumn(name = "idsill", referencedColumnName = "id")
    @ManyToOne
    private Sill idsill;

    public Zakaz() {
    }

    public Zakaz(Integer id) {
        this.id = id;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }

    public String getFurnitura() {
        return furnitura;
    }

    public void setFurnitura(String furnitura) {
        this.furnitura = furnitura;
    }

    public String getParam() {
        return param;
    }

    public void setParam(String param) {
        this.param = param;
    }

    public Typeoforders getIdtypeorder() {
        return idtypeorder;
    }

    public void setIdtypeorder(Typeoforders idtypeorder) {
        this.idtypeorder = idtypeorder;
    }

    public Reflux getIdreflux() {
        return idreflux;
    }

    public void setIdreflux(Reflux idreflux) {
        this.idreflux = idreflux;
    }

    public TypeProfil getIdtypeprofil() {
        return idtypeprofil;
    }

    public void setIdtypeprofil(TypeProfil idtypeprofil) {
        this.idtypeprofil = idtypeprofil;
    }

    public Itemdelivery getIdclient() {
        return idclient;
    }

    public void setIdclient(Itemdelivery idclient) {
        this.idclient = idclient;
    }

    public Glasspacket getIdglasspacket() {
        return idglasspacket;
    }

    public void setIdglasspacket(Glasspacket idglasspacket) {
        this.idglasspacket = idglasspacket;
    }

    public Install getIdinstall() {
        return idinstall;
    }

    public void setIdinstall(Install idinstall) {
        this.idinstall = idinstall;
    }

    public Sill getIdsill() {
        return idsill;
    }

    public void setIdsill(Sill idsill) {
        this.idsill = idsill;
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
        if (!(object instanceof Zakaz)) {
            return false;
        }
        Zakaz other = (Zakaz) object;
        if ((this.id == null && other.id != null) || (this.id != null && !this.id.equals(other.id))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "com.infiniteskills.mvc.entity.Zakaz[ id=" + id + " ]";
    }
    
}
