/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.infiniteskills.mvc.impl;

import com.infiniteskills.mvc.dao.QueryParams;
import com.infiniteskills.mvc.entity.ListItems;
import com.infiniteskills.mvc.entity.Listdelivery;
import com.infiniteskills.mvc.service.AbstractCrudService;
import java.util.List;
import java.util.Optional;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 *
 * @author Талалаев
 */
@Service("jpaListItemsService")
@Transactional
public class ListItemsService extends AbstractCrudService<ListItems>{
    
    
    
     public List<ListItems> findListItemsbyListDelivery(final Optional<Listdelivery> idListDelivery){
          if (idListDelivery.isPresent()) {
          return dao.findWithNamedQuery(ListItems.class, ListItems.FIND_BY_IDLISTDELIVERY, QueryParams.with("idDeliveryList", idListDelivery.get()));
        } else {
            return  null;
        } 
		
    
    }
    
}
