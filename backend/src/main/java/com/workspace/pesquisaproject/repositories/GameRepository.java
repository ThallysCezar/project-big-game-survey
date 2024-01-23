package com.workspace.pesquisaproject.repositories;

import com.workspace.pesquisaproject.entities.Game;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GameRepository extends JpaRepository<Game, Long> {
}
