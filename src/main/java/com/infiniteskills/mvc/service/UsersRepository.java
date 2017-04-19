/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.infiniteskills.mvc.service;

import com.infiniteskills.mvc.entity.Users;
import java.util.List;

/**
 *
 * @author 
 */
public interface UsersRepository {

    List<Users> findAll();

    Users update(Users rab);

    Users create(Users rab);

    List<Users> findAllWithDetails();

    Users save(Users rab);

    void delete(Users rab);
    
    Users findUserByLogin(String username);
    

}
