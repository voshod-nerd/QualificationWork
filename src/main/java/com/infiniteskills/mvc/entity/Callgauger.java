/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.infiniteskills.mvc.entity;

import java.io.Serializable;
import java.util.Date;
import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.Size;
import javax.xml.bind.annotation.XmlRootElement;

/**
 *
 * @author Талалаев
 */
@Entity
@Table(name = "callgauger")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "Callgauger.findAll", query = "SELECT c FROM Callgauger c"),
    @NamedQuery(name = "Callgauger.findById", query = "SELECT c FROM Callgauger c WHERE c.id = :id"),
    @NamedQuery(name = "Callgauger.findByPhone", query = "SELECT c FROM Callgauger c WHERE c.phone = :phone"),
    @NamedQuery(name = "Callgauger.findByAdres", query = "SELECT c FROM Callgauger c WHERE c.adres = :adres"),
    @NamedQuery(name = "Callgauger.findByOpen", query = "SELECT c FROM Callgauger c WHERE c.open = :open"),
    @NamedQuery(name = "Callgauger.findByDateadd", query = "SELECT c FROM Callgauger c WHERE c.dateadd = :dateadd"),
    @NamedQuery(name = "Callgauger.findByDateclose", query = "SELECT c FROM Callgauger c WHERE c.dateclose = :dateclose"),
    @NamedQuery(name = "Callgauger.findByFio", query = "SELECT c FROM Callgauger c WHERE c.fio = :fio")})
public class Callgauger implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(name = "id")
    private Integer id;
    // @Pattern(regexp="^\\(?(\\d{3})\\)?[- ]?(\\d{3})[- ]?(\\d{4})$", message="Недопустимый формат номера телефона/факса (должен иметь формат xxx-xxx-xxxx)")//if the field contains phone or fax number consider using this annotation to enforce field validation
    @Size(max = 255)
    @Column(name = "phone")
    private String phone;
    @Size(max = 255)
    @Column(name = "adres")
    private String adres;
    @Lob
    @Size(max = 65535)
    @Column(name = "desc")
    private String desc;
    @Column(name = "open")
    private Boolean open;
    @Column(name = "dateadd")
    @Temporal(TemporalType.DATE)
    private Date dateadd;
    @Column(name = "dateclose")
    @Temporal(TemporalType.DATE)
    private Date dateclose;
    @Size(max = 255)
    @Column(name = "fio")
    private String fio;

    public Callgauger() {
    }

    public Callgauger(Integer id) {
        this.id = id;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getAdres() {
        return adres;
    }

    public void setAdres(String adres) {
        this.adres = adres;
    }

    public String getDesc() {
        return desc;
    }

    public void setDesc(String desc) {
        this.desc = desc;
    }

    public Boolean getOpen() {
        return open;
    }

    public void setOpen(Boolean open) {
        this.open = open;
    }

    public Date getDateadd() {
        return dateadd;
    }

    public void setDateadd(Date dateadd) {
        this.dateadd = dateadd;
    }

    public Date getDateclose() {
        return dateclose;
    }

    public void setDateclose(Date dateclose) {
        this.dateclose = dateclose;
    }

    public String getFio() {
        return fio;
    }

    public void setFio(String fio) {
        this.fio = fio;
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
        if (!(object instanceof Callgauger)) {
            return false;
        }
        Callgauger other = (Callgauger) object;
        if ((this.id == null && other.id != null) || (this.id != null && !this.id.equals(other.id))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "com.infiniteskills.mvc.entity.Callgauger[ id=" + id + " ]";
    }
    
}
