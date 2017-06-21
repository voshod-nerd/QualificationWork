/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.infiniteskills.mvc.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import java.io.Serializable;
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
@Table(name = "itemdelivery")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "Itemdelivery.findAll", query = "SELECT i FROM Itemdelivery i"),
    @NamedQuery(name = "Itemdelivery.findById", query = "SELECT i FROM Itemdelivery i WHERE i.id = :id"),
    @NamedQuery(name = "Itemdelivery.findByFio", query = "SELECT i FROM Itemdelivery i WHERE i.fio = :fio"),
    @NamedQuery(name = "Itemdelivery.findByEmail", query = "SELECT i FROM Itemdelivery i WHERE i.email = :email"),
    @NamedQuery(name = "Itemdelivery.findBySend", query = "SELECT i FROM Itemdelivery i WHERE i.send = :send"),
    @NamedQuery(name = "Itemdelivery.findByPhone", query = "SELECT i FROM Itemdelivery i WHERE i.phone = :phone")})
public class Itemdelivery implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(name = "id")
    private Integer id;
    @Size(max = 255)
    @Column(name = "fio")
    private String fio;
    // @Pattern(regexp="[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?", message="Недопустимый адрес электронной почты")//if the field contains email address consider using this annotation to enforce field validation
    @Size(max = 50)
    @Column(name = "email")
    private String email;
    @Column(name = "send")
    private Boolean send;
    @Size(max = 50)
    @Column(name = "phone")
    private String phone;
    @Size(max = 50)
    @Column(name = "password")
    private String password;
    
    @JsonIgnore
    @OneToMany(mappedBy = "idclient")
    private Collection<Zakaz> zakazCollection;
      @JsonIgnore
    @OneToMany(mappedBy = "idItemDelivery")
    private Collection<ListItems> listItemsCollection;

    public Itemdelivery() {
    }

    public Itemdelivery(Integer id) {
        this.id = id;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getFio() {
        return fio;
    }

    public void setFio(String fio) {
        this.fio = fio;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Boolean getSend() {
        return send;
    }

    public void setSend(Boolean send) {
        this.send = send;
    }

    @XmlTransient
    public Collection<Zakaz> getZakazCollection() {
        return zakazCollection;
    }

    public void setZakazCollection(Collection<Zakaz> zakazCollection) {
        this.zakazCollection = zakazCollection;
    }

    @XmlTransient
    public Collection<ListItems> getListItemsCollection() {
        return listItemsCollection;
    }

    public void setListItemsCollection(Collection<ListItems> listItemsCollection) {
        this.listItemsCollection = listItemsCollection;
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
        if (!(object instanceof Itemdelivery)) {
            return false;
        }
        Itemdelivery other = (Itemdelivery) object;
        if ((this.id == null && other.id != null) || (this.id != null && !this.id.equals(other.id))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "com.infiniteskills.mvc.entity.Itemdelivery[ id=" + id + " ]";
    }

    /**
     * @return the phone
     */
    public String getPhone() {
        return phone;
    }

    /**
     * @param phone the phone to set
     */
    public void setPhone(String phone) {
        this.phone = phone;
    }

    /**
     * @return the password
     */
    public String getPassword() {
        return password;
    }

    /**
     * @param password the password to set
     */
    public void setPassword(String password) {
        this.password = password;
    }
    
}
