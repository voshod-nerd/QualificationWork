/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.infiniteskills.mvc.entity;

import java.io.Serializable;
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
@Table(name = "list_items")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "ListItems.findAll", query = "SELECT l FROM ListItems l"),
    @NamedQuery(name = "ListItems.findById", query = "SELECT l FROM ListItems l WHERE l.id = :id")})
public class ListItems implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(name = "id")
    private Integer id;
    @JoinColumn(name = "id_delivery_list", referencedColumnName = "id")
    @ManyToOne
    private Listdelivery idDeliveryList;
    @JoinColumn(name = "id_item_delivery", referencedColumnName = "id")
    @ManyToOne
    private Itemdelivery idItemDelivery;

    public ListItems() {
    }

    public ListItems(Integer id) {
        this.id = id;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Listdelivery getIdDeliveryList() {
        return idDeliveryList;
    }

    public void setIdDeliveryList(Listdelivery idDeliveryList) {
        this.idDeliveryList = idDeliveryList;
    }

    public Itemdelivery getIdItemDelivery() {
        return idItemDelivery;
    }

    public void setIdItemDelivery(Itemdelivery idItemDelivery) {
        this.idItemDelivery = idItemDelivery;
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
        if (!(object instanceof ListItems)) {
            return false;
        }
        ListItems other = (ListItems) object;
        if ((this.id == null && other.id != null) || (this.id != null && !this.id.equals(other.id))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "com.infiniteskills.mvc.entity.ListItems[ id=" + id + " ]";
    }
    
}
