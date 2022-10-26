import { unique_registers } from "./const"

// General registers are divided into 3 groups:
// 1. Data registers
// 2. Pointer registers
// 3. Index registers
export const general = {

    // data registers
    full_32_bit: {
        eax: unique_registers.eax,
        ebx: unique_registers.ebx,
        ecx: unique_registers.ecx,
        edx: unique_registers.edx,
    },
    half_16_bit: {
        ax: unique_registers.ax,
        bx: unique_registers.bx,
        cx: unique_registers.cx,
        dx: unique_registers.dx,
    },
    half_8_bit: {
        ah: unique_registers.ah,
        al: unique_registers.al,
        bh: unique_registers.bh,
        bl: unique_registers.bl,
        ch: unique_registers.ch,
        cl: unique_registers.cl,
        dh: unique_registers.dh,
        dl: unique_registers.dl,
    },

    // Pointer registers
    pointer: {
        instruction: unique_registers.ip,
        stack: unique_registers.sp,
        base: unique_registers.bp,
    },

    // index register
    index: {
        source: unique_registers.si,
        destination: unique_registers.di,
    },

    // flags 
    flag: {
        overflow: unique_registers.of,
        direction: unique_registers.df,
        interrupt: unique_registers.if,
        trap: unique_registers.tf,
        sign: unique_registers.sf,
        zero: unique_registers.zf,
        auxillary_carry: unique_registers.af,
        parity: unique_registers.pf,
        carry: unique_registers.cf,
    },

    // registers with common names
    by_name: {
        primary_accumulator: unique_registers.ax,
        base_register: unique_registers.bx,
        count_register: unique_registers.cx,
        data_register: unique_registers.dx,
        instruction_pointer: unique_registers.ip,
        stack_pointer: unique_registers.sp,
        base_pointer: unique_registers.bp,
        source_index: unique_registers.si,
        destination_index: unique_registers.di,
        overflow_flag: unique_registers.of,
        direction_flag: unique_registers.df,
        interrupt_flag: unique_registers.if,
        trap_flag: unique_registers.tf,
        sign_flag: unique_registers.sf,
        zero_flag: unique_registers.zf,
        auxillary_carry_flag: unique_registers.af,
        parity_flag: unique_registers.pf,
        carry_flag: unique_registers.cf,
    }
}
