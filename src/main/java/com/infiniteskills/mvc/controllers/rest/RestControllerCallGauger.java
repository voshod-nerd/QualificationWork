/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.infiniteskills.mvc.controllers.rest;

import static com.infiniteskills.mvc.controllers.rest.RestControllerCallGauger.PATH;
import com.infiniteskills.mvc.entity.Callgauger;
import com.infiniteskills.mvc.impl.CallGaugerService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author ПК
 */
@RestController
@RequestMapping(path = PATH,produces = MediaType.APPLICATION_JSON_VALUE)
public class RestControllerCallGauger {
      public static final String PATH = "/restCallGauger";
    public static final String ITEM_PATH = "/item";
    
    @Autowired
    private CallGaugerService callBackDAO;
    
    
     @RequestMapping(method = RequestMethod.GET)
    public List<Callgauger> getUnitList() {
        return callBackDAO.getAll();
    }
    
}
