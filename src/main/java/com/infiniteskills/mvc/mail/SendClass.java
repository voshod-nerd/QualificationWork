/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.infiniteskills.mvc.mail;

import com.infiniteskills.mvc.entity.Delivery;
import com.infiniteskills.mvc.entity.ListItems;
import com.infiniteskills.mvc.entity.Listdelivery;
import com.infiniteskills.mvc.entity.Message;
import com.infiniteskills.mvc.entity.Shares;
import com.infiniteskills.mvc.impl.ListItemsService;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author ПК
 */
@Service
public class SendClass {

    @Autowired
    private CrunchifyEmailAPI send;
    @Autowired
    private ListItemsService listItemsService;

    public void sendMessage(Message item) {
        try {
            send.crunchifyReadyToSendEmail(item.getDestination(), "testvoshoddiplom@gmail.com", "рассылка", "Ваш код подвердения " + item.getMessage());
        } catch (Exception er) {
            System.out.println(er.fillInStackTrace());
        }
    }

    public void sendDelivery(Delivery delivery) {

        try {
            Shares share = delivery.getIdShares();
            Listdelivery lsdelivery = delivery.getIdListdelivery();
            List<ListItems> ls = listItemsService.findListItemsbyListDelivery(Optional.ofNullable(lsdelivery));
            for (ListItems x : ls) {

                try {
                    send.crunchifyReadyToSendEmail(x.getIdItemDelivery().getEmail(), "testvoshoddiplom@gmail.com", "рассылка", delivery.getIdShares().getContent());

                } catch (Exception error) {
                    System.out.println(error.fillInStackTrace());
                }
            }

        } catch (Exception er) {
            System.out.println(er.fillInStackTrace());
        }

    }

}
