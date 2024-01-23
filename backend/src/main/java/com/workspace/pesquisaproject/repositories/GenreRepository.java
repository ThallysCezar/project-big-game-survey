package com.workspace.pesquisaproject.repositories;

import com.workspace.pesquisaproject.entities.Genre;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GenreRepository extends JpaRepository<Genre, Long> {
}
