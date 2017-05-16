/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.infiniteskills.mvc.dao;

/**
 *
 * @author 
 */
import javax.persistence.EntityManager;
import javax.persistence.Query;
import java.util.List;

public interface Dao {

    <T> T persist(T object);

    <T, ID> T getById(Class<T> clazz, ID id);

    <T> List getAll(Class<T> clazz);

    <T> T merge(T object);

    <T> void remove(T object);

    <T> List<T> findWithNamedQuery(Class<T> clazz, String namedQuery);

    <T> List<T> findWithNamedQuery(Class<T> clazz, String namedQuery, QueryParams queryParams);

    <T> T findSingleResultWithNamedQuery(Class<T> clazz, String namedQuery, QueryParams queryParams);

    Query createNamedQuery(Class clazz, String namedQuery);

    Query createNamedQuery(Class clazz, String namedQuery, QueryParams queryParams);

    EntityManager em();
}