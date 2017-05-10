/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.infiniteskills.mvc.controllers.rest;

import static com.infiniteskills.mvc.controllers.rest.RestControllerCallBack.PATH;
import com.infiniteskills.mvc.entity.Callback;
import com.infiniteskills.mvc.impl.CallBackService;
import java.util.List;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author ПК
 */
@RestController
@RequestMapping(path = PATH,produces = MediaType.APPLICATION_JSON_VALUE)
public class RestControllerCallBack {
    public static final String PATH = "/restCallBack";
    public static final String ITEM_PATH = "/item";
    
    @Autowired
    private CallBackService callBackDAO;
    
    
     @RequestMapping(method = RequestMethod.GET)
    public List<Callback> getUnitList() {
        return callBackDAO.getAll();
    }
    
    
    
    @RequestMapping(method = RequestMethod.PUT,
            path = ITEM_PATH,
            consumes = MediaType.APPLICATION_JSON_VALUE)
    public Callback updateU(@RequestBody Callback unit) {
        return callBackDAO.update(unit);
    }
    
    
}
