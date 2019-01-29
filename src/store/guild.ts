import { Guild } from '../types';
import { IRootState } from '../types/root-state';
import { MutationTree, ActionTree } from 'vuex';

export const state = (): IRootState => ({
    guilds: []
});
export const mutations: MutationTree<IRootState> = {
    setGuild(state: IRootState, guild: Guild[]) {
        state.guilds = guild;
    }
}

/*
export const actions: ActionTree<IRootState, IRootState> = {
    async nuxtServerInit({ commit }, { app }) {
        const guilds: Guild[] = await app.$mongoose.$getSchema(GuildSchema, { guildID: null });
        commit('setGuild', guilds.slice(0, 10));
    }
}
*/