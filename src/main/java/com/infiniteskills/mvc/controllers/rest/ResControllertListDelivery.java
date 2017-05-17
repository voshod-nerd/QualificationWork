/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.infiniteskills.mvc.controllers.rest;

import static com.infiniteskills.mvc.controllers.rest.ResControllertListDelivery.PATH;
import com.infiniteskills.mvc.entity.Listdelivery;
import com.infiniteskills.mvc.impl.ListDeliveryService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author Талалаев
 */

@RestController
@RequestMapping(path = PATH,produces = MediaType.APPLICATION_JSON_VALUE)
public class ResControllertListDelivery {
     public static final String PATH = "/restcreatedeliverylist";
    public static final String ITEM_PATH = "/item";
    
    @Autowired
    private ListDeliveryService dao;
    
    
     @RequestMapping(method = RequestMethod.GET)
    public List<Listdelivery> getUnitList() {
        return dao.getAll();
    }
    
    
    @RequestMapping(method = RequestMethod.POST,
            path = ITEM_PATH,
            consumes = MediaType.APPLICATION_JSON_VALUE)
    public Listdelivery createU(@RequestBody Listdelivery zav) {
        return dao.update(zav);
    }
    
    
    @RequestMapping(method = RequestMethod.PUT,
            path = ITEM_PATH,
            consumes = MediaType.APPLICATION_JSON_VALUE)
    public Listdelivery updateU(@RequestBody Listdelivery unit) {
        return dao.update(unit);
    }
    
    @RequestMapping(method = RequestMethod.DELETE,
            path = ITEM_PATH,
            consumes = MediaType.APPLICATION_JSON_VALUE)
    public void deleteU(@RequestBody Listdelivery zav) {
        dao.delete(zav);
    }
    
}
