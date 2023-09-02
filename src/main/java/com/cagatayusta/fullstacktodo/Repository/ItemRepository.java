package com.cagatayusta.fullstacktodo.Repository;

import com.cagatayusta.fullstacktodo.item.Item;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;


public interface ItemRepository extends CrudRepository<Item, Long> {
    Optional<Item> findById(Long id);
}
