package com.cagatayusta.fullstacktodo;

import com.cagatayusta.fullstacktodo.item.Item;
import org.springframework.data.repository.CrudRepository;


public interface ItemRepository extends CrudRepository<Item, Integer> {
}
