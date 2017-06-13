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
@Table(name = "CALLBACK")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "Callback.findAll", query = "SELECT c FROM Callback c"),
    @NamedQuery(name = "Callback.findById", query = "SELECT c FROM Callback c WHERE c.id = :id"),
    @NamedQuery(name = "Callback.findByPhone", query = "SELECT c FROM Callback c WHERE c.phone = :phone"),
    @NamedQuery(name = "Callback.findByDateadd", query = "SELECT c FROM Callback c WHERE c.dateadd = :dateadd"),
    @NamedQuery(name = "Callback.findByDateclose", query = "SELECT c FROM Callback c WHERE c.dateclose = :dateclose"),
    @NamedQuery(name = "Callback.findByOpen", query = "SELECT c FROM Callback c WHERE c.open = :open"),
    @NamedQuery(name = "Callback.findByFio", query = "SELECT c FROM Callback c WHERE c.fio = :fio")})
public class Callback implements Serializable {

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
    @Column(name = "dateadd")
    @Temporal(TemporalType.DATE)
    private Date dateadd;
    @Lob
    @Size(max = 65535)
    @Column(name = "description")
    private String description;
    @Column(name = "dateclose")
    @Temporal(TemporalType.DATE)
    private Date dateclose;
    @Column(name = "open")
    private Boolean open;
    @Size(max = 255)
    @Column(name = "fio")
    private String fio;

    public Callback() {
    }

    public Callback(Integer id) {
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

    public Date getDateadd() {
        return dateadd;
    }

    public void setDateadd(Date dateadd) {
        this.dateadd = dateadd;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Date getDateclose() {
        return dateclose;
    }

    public void setDateclose(Date dateclose) {
        this.dateclose = dateclose;
    }

    public Boolean getOpen() {
        return open;
    }

    public void setOpen(Boolean open) {
        this.open = open;
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
        if (!(object instanceof Callback)) {
            return false;
        }
        Callback other = (Callback) object;
        if ((this.id == null && other.id != null) || (this.id != null && !this.id.equals(other.id))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "com.infiniteskills.mvc.entity.Callback[ id=" + id + " ]";
    }
    
}
