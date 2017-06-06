/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.infiniteskills.mvc.impl;

import com.infiniteskills.mvc.service.AbstractCrudService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.infiniteskills.mvc.entity.Reflux;
/**
 *
 * @author Талалаев
 */
@Service("jpaRefluxService")
@Transactional
public class RefluxService extends AbstractCrudService<Reflux> {
    
}
