/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.infiniteskills.mvc.controllers.rest;

import static com.infiniteskills.mvc.controllers.rest.RestControllerInstall.PATH;
import com.infiniteskills.mvc.entity.Install;
import com.infiniteskills.mvc.impl.InstallService;
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
@RequestMapping(path = PATH, produces = MediaType.APPLICATION_JSON_VALUE)
public class RestControllerInstall {
    public static final String PATH = "rest/restinstall";
    public static final String ITEM_PATH = "/item";
    
      @Autowired
    private InstallService dao;

    @RequestMapping(method = RequestMethod.GET)
    public List<Install> getUnitList() {
        return dao.getAll();
    }

    @RequestMapping(method = RequestMethod.POST,
            path = ITEM_PATH,
            consumes = MediaType.APPLICATION_JSON_VALUE)
    public Install createU(@RequestBody Install zav) {
        return dao.update(zav);
    }

    @RequestMapping(method = RequestMethod.PUT,
            path = ITEM_PATH,
            consumes = MediaType.APPLICATION_JSON_VALUE)
    public Install updateU(@RequestBody Install unit) {
        return dao.update(unit);
    }

    @RequestMapping(method = RequestMethod.DELETE,
            path = ITEM_PATH,
            consumes = MediaType.APPLICATION_JSON_VALUE)
    public void deleteU(@RequestBody Install zav) {
        dao.delete(zav);
    }
}
