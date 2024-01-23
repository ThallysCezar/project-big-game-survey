package com.workspace.pesquisaproject.services;

import com.workspace.pesquisaproject.dtos.RecordDTO;
import com.workspace.pesquisaproject.dtos.RecordInsertDTO;
import com.workspace.pesquisaproject.entities.Game;
import com.workspace.pesquisaproject.entities.Record;
import com.workspace.pesquisaproject.repositories.GameRepository;
import com.workspace.pesquisaproject.repositories.RecordRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.Instant;
import java.util.List;

@Service
public class RecordService {

    @Autowired
    private RecordRepository repository;

    @Autowired
    private GameRepository gameRepository;

    @Transactional
    public RecordDTO insert(RecordInsertDTO dto) {
        Record entity = new Record();
        entity.setName(dto.getName());
        entity.setAge(dto.getAge());
        entity.setMoment(Instant.now());

        Game game = gameRepository.getOne(dto.getGameId());
        entity.setGame(game);

        entity = repository.save(entity);
        return new RecordDTO(entity);
    }

    @Transactional(readOnly = true)
    public Page<RecordDTO> findByMoments(Instant minDate, Instant maxDate, PageRequest pageRequest) {
        return repository.findByMoments(minDate, maxDate, pageRequest).map(x -> new RecordDTO(x));
    }
}
