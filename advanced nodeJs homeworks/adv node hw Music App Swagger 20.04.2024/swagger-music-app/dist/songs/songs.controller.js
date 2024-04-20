"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SongsController = void 0;
const common_1 = require("@nestjs/common");
const songs_service_1 = require("./songs.service");
const song_create_dto_1 = require("./songsDto/song-create.dto");
const song_update_dto_1 = require("./songsDto/song-update.dto");
const swagger_1 = require("@nestjs/swagger");
let SongsController = class SongsController {
    constructor(songService) {
        this.songService = songService;
    }
    getSongs() {
        return this.songService.getSongs();
    }
    createSong(body) {
        return this.songService.createSong(body);
    }
    updateSong(id, body) {
        return this.songService.updateSong(id, body);
    }
    deleteSong(id) {
        return this.songService.deleteSong(id);
    }
};
exports.SongsController = SongsController;
__decorate([
    (0, common_1.Get)('/'),
    (0, swagger_1.ApiOperation)({ summary: 'Retrieve the songs from the database' }),
    (0, swagger_1.ApiOkResponse)({ description: 'Songs retrieved succesfuly!' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SongsController.prototype, "getSongs", null);
__decorate([
    (0, common_1.Post)('/'),
    (0, swagger_1.ApiOperation)({ summary: 'Create a song' }),
    (0, swagger_1.ApiCreatedResponse)({ description: 'Song created succesfully!' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [song_create_dto_1.SongCreateDTO]),
    __metadata("design:returntype", Promise)
], SongsController.prototype, "createSong", null);
__decorate([
    (0, common_1.Put)('/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a song based on its ID' }),
    (0, swagger_1.ApiResponse)({ description: 'Song updated succesfully!', status: 200 }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, song_update_dto_1.SongUpdateDTO]),
    __metadata("design:returntype", Promise)
], SongsController.prototype, "updateSong", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a song based on its ID' }),
    (0, swagger_1.ApiResponse)({ description: 'Song deleted succesfully!', status: 204 }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SongsController.prototype, "deleteSong", null);
exports.SongsController = SongsController = __decorate([
    (0, common_1.UsePipes)(new common_1.ValidationPipe({
        whitelist: true,
        forbidUnknownValues: true,
        transform: true,
    })),
    (0, swagger_1.ApiTags)('Songs'),
    (0, common_1.Controller)('songs'),
    __metadata("design:paramtypes", [songs_service_1.SongsService])
], SongsController);
//# sourceMappingURL=songs.controller.js.map