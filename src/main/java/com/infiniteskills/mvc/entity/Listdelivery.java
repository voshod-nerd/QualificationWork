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
@Table(name = "listdelivery")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "Listdelivery.findAll", query = "SELECT l FROM Listdelivery l"),
    @NamedQuery(name = "Listdelivery.findById", query = "SELECT l FROM Listdelivery l WHERE l.id = :id"),
    @NamedQuery(name = "Listdelivery.findByName", query = "SELECT l FROM Listdelivery l WHERE l.name = :name")})
public class Listdelivery implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(name = "id")
    private Integer id;
    @Size(max = 500)
    @Column(name = "name")
    private String name;
     @JsonIgnore
    @OneToMany(mappedBy = "idListdelivery")
    private Collection<Delivery> deliveryCollection;
      @JsonIgnore
    @OneToMany(mappedBy = "idDeliveryList")
    private Collection<ListItems> listItemsCollection;

    public Listdelivery() {
    }

    public Listdelivery(Integer id) {
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

    @XmlTransient
    public Collection<Delivery> getDeliveryCollection() {
        return deliveryCollection;
    }

    public void setDeliveryCollection(Collection<Delivery> deliveryCollection) {
        this.deliveryCollection = deliveryCollection;
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
        if (!(object instanceof Listdelivery)) {
            return false;
        }
        Listdelivery other = (Listdelivery) object;
        if ((this.id == null && other.id != null) || (this.id != null && !this.id.equals(other.id))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "com.infiniteskills.mvc.entity.Listdelivery[ id=" + id + " ]";
    }
    
}
