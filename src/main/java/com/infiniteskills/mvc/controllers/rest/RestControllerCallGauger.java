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
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author ПК
 */
@RestController
@RequestMapping(path = PATH, produces = MediaType.APPLICATION_JSON_VALUE)
public class RestControllerCallGauger {

    public static final String PATH = "/restcallgauger";
    public static final String ITEM_PATH = "/item";

    @Autowired
    private CallGaugerService callGaugerDAO;

    @RequestMapping(method = RequestMethod.GET)
    public List<Callgauger> getUnitList() {
        return callGaugerDAO.getAll();
    }

    @RequestMapping(method = RequestMethod.PUT,
            path = ITEM_PATH,
            consumes = MediaType.APPLICATION_JSON_VALUE)
    public Callgauger updateU(@RequestBody Callgauger unit) {
        return callGaugerDAO.update(unit);
    }

}
