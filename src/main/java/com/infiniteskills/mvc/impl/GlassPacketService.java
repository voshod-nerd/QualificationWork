/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.infiniteskills.mvc.impl;

import com.infiniteskills.mvc.entity.Glasspacket;
import com.infiniteskills.mvc.service.AbstractCrudService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 *
 * @author Талалаев
 */
@Service("jpaGlassPacketService")
@Transactional
public class GlassPacketService extends AbstractCrudService<Glasspacket> {
    
}
