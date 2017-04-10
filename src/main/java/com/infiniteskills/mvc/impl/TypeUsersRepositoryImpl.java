/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.infiniteskills.mvc.impl;

import com.infiniteskills.mvc.dao.QueryParams;
import com.infiniteskills.mvc.entity.Typeusers;
import com.infiniteskills.mvc.service.AbstractCrudService;


import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.util.Optional;


/**
 *
 * @author Соколов
 */
@Service("jpaTypeuserService")
@Transactional
public class TypeUsersRepositoryImpl extends AbstractCrudService<Typeusers> {

    public Typeusers getTypeUserByName(final Optional<String> typeUser) {
        
        if (typeUser.isPresent()) {
          return dao.findWithNamedQuery(Typeusers.class, Typeusers.FIND_BY_TYPEUSER, QueryParams.with("name", typeUser.get())).get(0);
        } else {
            return  null;
        }
    }

}
