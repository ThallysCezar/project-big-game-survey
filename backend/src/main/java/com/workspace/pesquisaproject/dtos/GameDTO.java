package com.workspace.pesquisaproject.dtos;

import com.workspace.pesquisaproject.entities.Game;
import com.workspace.pesquisaproject.entities.enums.Platform;

import java.io.Serializable;

public class GameDTO implements Serializable {
    private static final long seriaVersionUID = 1L;

    private Long id;
    private String title;
    private Platform platform;

    public GameDTO() {
    }

    public GameDTO(Game entity) {
        id = entity.getId();
        title = entity.getTitle();
        platform = entity.getPlatform();
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Platform getPlatform() {
        return platform;
    }

    public void setPlatform(Platform platform) {
        this.platform = platform;
    }
}
