/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.infiniteskills.mvc.impl;

import com.infiniteskills.mvc.dao.QueryParams;
import com.infiniteskills.mvc.entity.Users;
import com.infiniteskills.mvc.service.AbstractCrudService;
import java.util.Optional;


import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 *
 * @author 
 */
@Service("jpaUsersRepository")
@Transactional
public class UsersService extends AbstractCrudService<Users> {

    public Users findUserByLogin(final Optional<String> username){
          if (username.isPresent()) {
          return dao.findSingleResultWithNamedQuery(Users.class, Users.FIND_BY_USERNAME, QueryParams.with("username", username.get()));
        } else {
            return  null;
        } 
		
    
    }

    
    
    
}
