/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.infiniteskills.mvc.service;

import com.infiniteskills.mvc.dao.Dao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.GenericTypeResolver;
/**
 *
 * @author Талалаев
 */



import java.util.List;

public abstract class AbstractCrudService<T> {

    protected final Class<T> entityClass;

    @Autowired
    protected Dao dao;

    @SuppressWarnings("unchecked")
    public AbstractCrudService() {
        this.entityClass = (Class<T>) GenericTypeResolver.resolveTypeArgument(getClass(), AbstractCrudService.class);
    }

    public void persist(final T object) {
        dao.persist(object);
    }

    public <ID> T get(final ID id) {
        return dao.getById(entityClass, id);
    }

    @SuppressWarnings("unchecked")
    public List<T> getAll() {
        return dao.getAll(entityClass);
    }

    public T update(final T object) {
        return dao.merge(object);
    }

    public void delete(final T object) {
        dao.remove(object);
    }
}

