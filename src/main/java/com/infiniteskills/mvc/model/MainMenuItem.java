/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.infiniteskills.mvc.model;

import com.infiniteskills.mvc.entity.Articles;
import java.util.ArrayList;
import java.util.List;

/**
 *
 * @author Талалаев
 */
public class MainMenuItem {
    
    private   String  name;
    private int id;
    public ArrayList<Articles> submenus=new ArrayList<>();
    
    public MainMenuItem(String name,int id) {
        this.id=id;
        this.name=name;
    
    }
    
    public void AddSumMenu(Articles item ) {
        getSubmenus().add(item);
    
    }
    /**
     * @return the name
     */
    public String getName() {
        return name;
    }

    /**
     * @param name the name to set
     */
    public void setName(String name) {
        this.name = name;
    }

    /**
     * @return the id
     */
    public Integer getId() {
        return id;
    }

    /**
     * @param id the id to set
     */
    public void setId(Integer id) {
        this.id = id;
    }

    /**
     * @return the submenus
     */
    public List<Articles> getSubmenus() {
        return submenus;
    }
    
    
}
