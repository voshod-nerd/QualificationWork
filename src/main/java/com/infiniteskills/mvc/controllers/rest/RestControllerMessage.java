/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.infiniteskills.mvc.controllers.rest;

import static com.infiniteskills.mvc.controllers.rest.RestControllerMessage.PATH;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.MediaType;
import com.infiniteskills.mvc.entity.Message;
import com.infiniteskills.mvc.mail.SendClass;
import org.springframework.beans.factory.annotation.Autowired;

/**
 *
 * @author ПК
 */
@RestController
@RequestMapping(path = PATH, produces = MediaType.APPLICATION_JSON_VALUE)
public class RestControllerMessage {

    public static final String PATH = "/rest/restmessage";
    public static final String ITEM_PATH = "/item";

    @Autowired
    private SendClass send;

    @RequestMapping(method = RequestMethod.POST,
            path = ITEM_PATH,
            consumes = MediaType.APPLICATION_JSON_VALUE)
    public Message sendMessage(@RequestBody Message zav) {

        send.sendMessage(zav);
        return zav;
    }

}
