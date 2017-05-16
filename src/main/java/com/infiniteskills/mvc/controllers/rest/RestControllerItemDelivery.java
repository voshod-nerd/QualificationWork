/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.infiniteskills.mvc.controllers.rest;

/**
 *
 * @author Талалаев
 */
import static com.infiniteskills.mvc.controllers.rest.RestControllerItemDelivery.PATH;
import com.infiniteskills.mvc.entity.Itemdelivery;
import com.infiniteskills.mvc.impl.ItemDeliveryService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = PATH, produces = MediaType.APPLICATION_JSON_VALUE)
public class RestControllerItemDelivery {

    public static final String PATH = "/restitemdelivery";
    public static final String ITEM_PATH = "/item";

    @Autowired
    private ItemDeliveryService uService;

    @RequestMapping(method = RequestMethod.GET)
    public List<Itemdelivery> getUnitList() {
        return uService.getAll();
    }

    @RequestMapping(method = RequestMethod.POST,
            path = ITEM_PATH,
            consumes = MediaType.APPLICATION_JSON_VALUE)
    public Itemdelivery createU(@RequestBody Itemdelivery zav) {
        System.out.println(zav.getFio());
        
        return uService.persist(zav);
    }

    @RequestMapping(method = RequestMethod.PUT,
            path = ITEM_PATH,
            consumes = MediaType.APPLICATION_JSON_VALUE)
    public Itemdelivery updateU(@RequestBody Itemdelivery zav) {

        return uService.update(zav);
    }

    @RequestMapping(method = RequestMethod.DELETE,
            path = ITEM_PATH,
            consumes = MediaType.APPLICATION_JSON_VALUE)
    public void deleteU(@RequestBody Itemdelivery zav) {
        uService.delete(zav);
    }
}
